import tw from "twin.macro"

//Layout
export const AppContainer = tw.div`
w-full
max-w-full
flex
flex-col
items-center
justify-center
pt-2
pb-2
pl-5
pr-4
`;

//nav
export const Span = tw.span`inline-flex items-center justify-center w-12 h-12 text-lg text-gray-400`;
export const NavItem = tw.span`pl-4 text-sm font-medium`;

//text elements
export const Title = tw.h1`
text-2xl
font-bold
text-center
`;

//Buttons
export const Button = tw.button`
pl-4
pr-4
pt-1
pb-2
text-black
rounded-md
border
border-black
hover:bg-yellow-100
transition-colors
`;
