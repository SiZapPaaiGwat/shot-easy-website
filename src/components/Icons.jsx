import { icons } from 'lucide-react';
import { cn } from '../lib/utils';

export const Icon = ({ name, color, size, className }) => {
    const LucideIcon = icons[name];
    return <span role="img" aria-label={name} className={cn("anticon", className)}><LucideIcon color={color} size={size || '1em'} /></span>;
};

export const Icons = {
    macos: (props) => (
        <svg {...props} width="52" height="38" viewBox="0 0 52 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 24.75C9.17564 24.75 11.75 22.1756 11.75 19C11.75 15.8244 9.17564 13.25 6 13.25C2.82436 13.25 0.25 15.8244 0.25 19C0.25 22.1756 2.82436 24.75 6 24.75Z" fill="#FF5F57" stroke="black" strokeOpacity="0.2" strokeWidth="0.5"></path><path d="M26 24.75C29.1756 24.75 31.75 22.1756 31.75 19C31.75 15.8244 29.1756 13.25 26 13.25C22.8244 13.25 20.25 15.8244 20.25 19C20.25 22.1756 22.8244 24.75 26 24.75Z" fill="#FEBC2E" stroke="black" strokeOpacity="0.2" strokeWidth="0.5"></path><path d="M46 24.75C49.1756 24.75 51.75 22.1756 51.75 19C51.75 15.8244 49.1756 13.25 46 13.25C42.8244 13.25 40.25 15.8244 40.25 19C40.25 22.1756 42.8244 24.75 46 24.75Z" fill="#28C840" stroke="black" strokeOpacity="0.2" strokeWidth="0.5"></path></svg>
    ),
    windows: (props) => (
        <svg {...props} width="104" height="38" viewBox="0 0 104 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.498047 20C0.361328 20 0.244141 19.9512 0.146484 19.8535C0.0488281 19.7559 0 19.6387 0 19.502C0 19.3652 0.0488281 19.248 0.146484 19.1504C0.244141 19.0488 0.361328 18.998 0.498047 18.998H10.5C10.6367 18.998 10.7539 19.0488 10.8516 19.1504C10.9492 19.248 10.998 19.3652 10.998 19.502C10.998 19.6387 10.9492 19.7559 10.8516 19.8535C10.7539 19.9512 10.6367 20 10.5 20H0.498047Z" fill="currentColor"></path><path d="M48.502 24.998C48.2285 24.998 47.9766 24.9316 47.7461 24.7988C47.5195 24.6621 47.3379 24.4805 47.2012 24.2539C47.0684 24.0234 47.002 23.7715 47.002 23.498V16.502C47.002 16.2285 47.0684 15.9785 47.2012 15.752C47.3379 15.5215 47.5195 15.3398 47.7461 15.207C47.9766 15.0703 48.2285 15.002 48.502 15.002H55.498C55.7715 15.002 56.0215 15.0703 56.248 15.207C56.4785 15.3398 56.6602 15.5215 56.793 15.752C56.9297 15.9785 56.998 16.2285 56.998 16.502V23.498C56.998 23.7715 56.9297 24.0234 56.793 24.2539C56.6602 24.4805 56.4785 24.6621 56.248 24.7988C56.0215 24.9316 55.7715 24.998 55.498 24.998H48.502ZM55.498 24.002C55.6348 24.002 55.752 23.9531 55.8496 23.8555C55.9512 23.7539 56.002 23.6348 56.002 23.498V16.502C56.002 16.3652 55.9512 16.248 55.8496 16.1504C55.752 16.0488 55.6348 15.998 55.498 15.998H48.502C48.3652 15.998 48.2461 16.0488 48.1445 16.1504C48.0469 16.248 47.998 16.3652 47.998 16.502V23.498C47.998 23.6348 48.0469 23.7539 48.1445 23.8555C48.2461 23.9531 48.3652 24.002 48.502 24.002H55.498Z" fill="currentColor"></path><path d="M92.498 24.998C92.3613 24.998 92.2441 24.9492 92.1465 24.8516C92.0488 24.7461 92 24.6289 92 24.5C92 24.3633 92.0488 24.2461 92.1465 24.1484L96.793 19.502L92.1465 14.8555C92.0488 14.7578 92 14.6387 92 14.498C92 14.3926 92.0293 14.2988 92.0879 14.2168L92.1465 14.1465C92.2441 14.0488 92.3613 14 92.498 14C92.6035 14 92.6992 14.0293 92.7852 14.0879L92.8555 14.1465L97.502 18.793L102.148 14.1465C102.242 14.0488 102.359 14 102.5 14C102.641 14 102.758 14.0488 102.852 14.1465C102.953 14.2402 103.004 14.3574 103.004 14.498C103.004 14.6348 102.953 14.7539 102.852 14.8555L98.2051 19.502L102.852 24.1484C102.949 24.2422 102.998 24.3594 102.998 24.5C102.998 24.6016 102.969 24.6973 102.91 24.7871L102.852 24.8516C102.758 24.9492 102.641 24.998 102.5 24.998C102.398 24.998 102.303 24.9688 102.213 24.9102L102.148 24.8516L97.502 20.2051L92.8555 24.8516C92.7578 24.9492 92.6387 24.998 92.498 24.998Z" fill="currentColor"></path></svg>
    )
}