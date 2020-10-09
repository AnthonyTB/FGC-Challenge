import React, { useEffect, useState } from "react";
import "./Dog.css";
import ApiCalls from '../../Helpers/ApiCalls'
import { FetchMethod } from "../../enums";
import config from '../../config';
import { IDogBreedResponse } from "../../interfaces";

const Dog: React.FC<any> = (props) => {
  // stores the response from the api request
  const [dogsList, setDogsList] = useState<null | IDogBreedResponse>(null);
  const [error, setError] = useState<null | string>(null);

  // runs everytime the route is changed to pull the new list of dogs
  useEffect(() => {
    // number of dogs you want to return
    const numberOfDogs: string = '3'

    // breed of the dog the user is trying to view
    const breedName: string = props.match.params.DogBreed.includes('-') ? props.match.params.DogBreed.split('-').reverse().join('/') : props.match.params.DogBreed;

    // api call to fetch the list of dog images
    const getDogs = async () => {
      // sets the state to null when pulling new list of dogs to remove old and render the loading text
      setDogsList(null);

      // fetch function
      // params: Route<string>, FetchMethod<enum<string>>, Body<IExtras>
      const dogs = await ApiCalls.genericFetchCall(`${config.DOGS_BREED_API_ENDPOINT}`, FetchMethod.GET, { passedParams: [breedName.toLowerCase(), 'images', 'random', numberOfDogs] });

      // sets the response in the state if no error
      if (dogs.status === 'success') {
        setDogsList(dogs);
      } else {
        setError(dogs.message)
      }
    }
    getDogs();
  }, [props.match.params.DogBreed])

  return <div className="Dog">
    {error ? <h3 className="error">{error}</h3> :
      (dogsList ? (
        <>
          <ul>
            {/*@ts-ignore*/}
            {dogsList.message.map((dog: any, Idx: number) => {
              return (
                <li key={`Doggo ${Idx}`}>
                  <img className="DoggoImg" src={`${dog}`} alt={`${props.match.params.DogBreed.split('-').join(' ')} ${Idx}`}/>
                  <h2 className="DoggoBreed">I'm a <span>{props.match.params.DogBreed.split('-').join(' ')}</span></h2>
                </li>
              )
            })}
          </ul>
        </>
      ) : "Loading...")}
  </div>;
};

export default Dog;