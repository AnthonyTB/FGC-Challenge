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
    const { passedParams, passedHeaders, passedBody } = extras;
    let finalRoute = `${route}`;
    if (passedParams) {
      const paramsUrl = passedParams.join("/");
      finalRoute = `${route}/${paramsUrl}`;
    }

    let fetchBody: any = {
      method,
    };

    if (passedHeaders) {
      fetchBody = {
        ...fetchBody,
        headers: {
          ...passedHeaders,
        },
      };
    }

    if (passedBody) {
      fetchBody = {
        ...fetchBody,
        body: JSON.stringify(passedBody),
      };
    }

    return fetch(`${finalRoute}`, {
      ...fetchBody,
    }).then((res) => res.json());
  },
}

export default ApiCalls;