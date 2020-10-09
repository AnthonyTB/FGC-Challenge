interface IHeaders {
  "content-type"?: string;
  Authorization?: string;
}

interface IExtras {
  passedParams?: string[];
  passedHeaders?: IHeaders;
  passedBody?: any;
}

const ApiCalls = {
    genericFetchCall(route: string, method: string, extras: IExtras) {
      // deconstructs extras
    const { passedParams, passedHeaders, passedBody } = extras;

    // inits route variable 
    let finalRoute = `${route}`;

    // checks if params were passed if so adds them to route
    if (passedParams) {
      const paramsUrl = passedParams.join("/");
      finalRoute = `${route}/${paramsUrl}`;
    }

    // inits body varible
    let fetchBody: any = {
      method,
    };

    // if headers were passed then adds them to req
    if (passedHeaders) {
      fetchBody = {
        ...fetchBody,
        headers: {
          ...passedHeaders,
        },
      };
    }

    // if headers were passed then adds them to body
    if (passedBody) {
      fetchBody = {
        ...fetchBody,
        body: JSON.stringify(passedBody),
      };
    }

    // returns fetch with final data and returns json if 200 response
    return fetch(`${finalRoute}`, {
      ...fetchBody,
    }).then((res) => res.json());
  },
}

export default ApiCalls;