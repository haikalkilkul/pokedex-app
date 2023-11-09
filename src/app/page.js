import Image from "next/image";
import pic from "../../public/images/Salamence.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronLeft, faChevronRight, faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {getPokemon} from '../helpers/api'

export default async function page() {
  const pokemon = await getPokemon();
  return (
    <>
      <div className="h-screen">
        <div className="h1 text-center font-bold p-2 text-lg">Pokedex App</div>
        <hr className="md:p-2" />
        <div className="p-2 flex justify-center">
          <div className="bg-red-700 h-[85vh] w-11/12 md:w-1/3 rounded-lg">
            <div className="h-1/2">
              <div className="grid grid-cols-2 pt-1">
                <div className="pl-2 pt-1 grid content-center">
                  <FontAwesomeIcon
                    icon={ faCircleChevronLeft }
                    size="xl"
                  />
                </div>
                <div className="flex justify-end pt-1 relative gap-x-1 pr-2">
                  <div className="bg-rose-950 rounded-full w-6">&nbsp;</div>
                  <div className="bg-amber-500 rounded-full w-6">&nbsp;</div>
                  <div className="bg-lime-900 rounded-full w-6">&nbsp;</div>
                </div>
              </div>
              <div className="">
              </div>
              <div className="bg-slate-300 m-2 rounded-lg h-5/6 md:h-5/6 border-solid border-2 border-black">
                <div className="relative h-full">
                  <Image
                    src={ pokemon.sprites.other['official-artwork'].front_default }
                    alt="Pokemon Image"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="h-1/2 p-2">
              <div className="grid">
                <div className="grid grid-cols-2">
                  <div className="text-xs"><FontAwesomeIcon icon={ faChevronLeft } size="xs" className="mr-1" />Pre-ev</div>
                  <div className="text-xs text-right">Ev<FontAwesomeIcon icon={ faChevronRight } size="xs" className="mr-1" /></div>
                </div>
                <div className="h1 text-center first-letter:uppercase">{pokemon.name}</div>
                <div className="flex justify-center gap-x-2">
                  <div className="bg-rose-300 rounded-lg p-0.5 text-sm first-letter:uppercase">{pokemon.types[0].type.name}</div>
                  <div className="bg-rose-300 rounded-lg p-0.5 text-sm first-letter:uppercase">{pokemon.types[1].type.name}</div>
                </div>
                <div className="mt-1 text-center">Abilities</div>
                <div className="flex justify-center gap-x-2">
                  <div className="p-0.5 text-sm first-letter:uppercase">{pokemon.abilities[0].ability.name}</div>
                  <div className="p-0.5 text-sm first-letter:uppercase">{pokemon.abilities[1].ability.name}</div>
                </div>
                <div className="mt-1 text-center">Gender ratio</div>
                <div className="flex justify-center gap-x-2">
                  <div className="p-0.5 text-sm">Male</div>
                  <div className="p-0.5 text-sm">Female</div>
                </div>
                <div className="mt-1 text-center">Egg Group</div>
                <div className="flex justify-center gap-x-2">
                  <div className="p-0.5 text-sm">Egg Group data</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
