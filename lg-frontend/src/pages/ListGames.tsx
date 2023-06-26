import { Nav, Loader } from 'components';
import { useEffect, useRef, useState } from 'react';
import { Game } from 'types';
import axios from 'axios';


export function ListGames() {
  const refTimer = useRef<number | null>(null);
  
  const [games, setGames] = useState<Game[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(0);
  useEffect(()=>{
    setIsLoading(true);
    const url='https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/';
    const config={
      headers:{
        'dev-email-address': 'app_master@gmail.com',
      },
    };
    const stopTimer = () => {
      if (refTimer.current === null) return;
      window.clearTimeout(refTimer.current);
      refTimer.current = null;
  };
    const getGames = async () => {
      try {
        const res = await axios.get(url, config);
        refTimer.current = window.setTimeout(() => {
          setServerError(0);
        }, 5000);
        console.log(res);
        setGames(res.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        if (axios.isAxiosError(error)) {
          console.log(error.status)
          console.error(error.response);
          if(error.status? (error.status>500 || error.status<509) && error.status!==501 && error.status!==506 && error.status!==505:false){
            setServerError(1);
          } else{
            setServerError(2);
          }

        } else {
          console.error(error);
        }
        return () => {
          games? setServerError(0): stopTimer();
          if (refTimer.current !== null) {
            window.clearTimeout(refTimer.current);
          }};
      }
    };
    getGames()
    
  },[]);
  /*const loadGames = async(titleGame: string)=>{
    games
  }*/
  
  return (
    <>
      <div className='relative'>
        <Nav />
      </div>
       {serverError===0 ? isLoading ?
                        <div className=' text-center'>
                          <Loader loading={isLoading}/> 
                        </div>
                          :
      <div className="items-center w-full">
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 items-center w-full p-2'>
            { games? games.map((game)=>{
              
              return (<div className='empty:animate-pulse group bg-zinc-950 rounded container flex relative item center gap-4 overflow-hidden hover:bg-zinc-400/0 transition-all'>
                <img className='w-full hover:skew-y-1 object-center' src={game.thumbnail} alt={game.title} />
                <div className='absolute inset-x-0 w-full bg-gradient-to-t from-zinc-950 from-10%  bottom-0 p-5  transition-all group-hover:hidden uppercase'>{game.title}</div>
                <div className='absolute inset-x-0 w-full bg-gradient-to-t from-zinc-950 from-50%  bottom-0 p-5  ease-linear invisible group-hover:visible'>
                    <h1 className='font-bold top-auto'>{game.title}</h1>
                    <p>{game.short_description}</p> 
                  <div/>
                </div>
              </div> )  
            }): null}
        </div>
      </div>
      : <div className='item-center place-content-center text-lg p-10 w-full uppercase text-center'>
        {serverError===1? "O servidor fahou em responder, tente recarregar a página": serverError===2?"O servidor não conseguirá responder por agora, tente voltar novamente mais tarde": !games? "O servidor demorou para responder, tente mais tarde":null}
      </div> }
    </>
  );
}
