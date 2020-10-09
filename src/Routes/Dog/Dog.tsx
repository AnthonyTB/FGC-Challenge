import React, { useEffect, useState } from "react";
import "./Dog.css";
import ApiCalls from '../../Helpers/ApiCalls'
import { FetchMethod } from "../../enums";
import config from '../../config';

const Dog: React.FC<any> = (props) => {
  const [dogsList, setDogsList] = useState(null);
  useEffect(() => {
    const numberOfDogs: string = '3'
    const breedName: string = props.match.params.DogBreed.includes('-') ? props.match.params.DogBreed.split('-').reverse().join('/') : props.match.params.DogBreed;
    const getDogs = async () => {
      setDogsList(null);
      const dogs = await ApiCalls.genericFetchCall(`${config.DOGS_BREED_API_ENDPOINT}`, FetchMethod.GET, { passedParams: [breedName.toLowerCase(), 'images', 'random', numberOfDogs] });
      setDogsList(dogs);
    }
    getDogs();
  }, [props.match.params.DogBreed])

  return <div className="Dog">
    {dogsList ? (
      <>
        <ul>
          {/*@ts-ignore*/}
          {dogsList.message.map((dog: any, Idx: number) => {
            return (
              <li key={`Doggo ${Idx}`}>
                <img className="DoggoImg" src={`${dog}`} />
                <h2 className="DoggoBreed">I'm a <span>{props.match.params.DogBreed.split('-').join(' ')}</span></h2>
              </li>
            )
          })}
        </ul>
      </>
    ) : "Loading..."}
  </div>;
};

export default Dog;