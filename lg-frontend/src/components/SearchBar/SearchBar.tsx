import { Button, SearchIcon } from "components";

type Props = {
  onClick?: VoidFunction;
  text?: string;
};
export function SearchBar({text='Procurar na lista'}:Props) {
  return(
    <div>
      <input className="py-1 px-3 rounded-md text-sm text-black" type="text" placeholder={text}/>
      <Button>
        <SearchIcon />
      </Button>
    </div>
  )
}