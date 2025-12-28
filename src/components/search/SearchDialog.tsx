import { Button } from "@/components/ui/button";
import { SearchIcon } from "@/components/ui/animated/search";
// import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
// import { SearchCommandBox } from "./SearchCommandBox";
// import SearchComponent from "astro-pagefind/components/Search";

// export function SearchDialog() {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button
//           variant="ghost"
//           size="icon"
//           className="rounded-lg bg-neutral-950 border border-white/15 hover:bg-neutral-900"
//           aria-label="Search"
//         >
//           <SearchIcon size={18} />
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-lg p-0">
//         <SearchCommandBox />
//         {/* <SearchComponent id="search" uiOptions={{ showImages: false }} /> */}
//       </DialogContent>
//     </Dialog>
//   );
// }

export function SearchDialog() {
  return (
    <a href="/search" target="_blank" rel="noopener noreferrer">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-lg bg-neutral-950 border border-white/15 hover:bg-neutral-900"
        aria-label="Search"
      >
        <SearchIcon size={18} />
      </Button>
    </a>
  );
}
