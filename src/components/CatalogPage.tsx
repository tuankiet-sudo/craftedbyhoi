//import { Button, Typography, Container, Grid } from '@mui/material';
//import { Link } from 'react-router-dom';
import FlipbookIframeCatalog from "./FlipbookIframeCatalog";
import { useParams } from "react-router-dom";

const CatalogPage = () => {
    const page = useParams<{ page?: string }>().page;
    console.log("CatalogPage page:", page);

    if (page) {
        const src= `https://heyzine.com/flip-book/a799c6d307.html#page/${page}`;
        return <FlipbookIframeCatalog src={src} />;
    }

    return (
        <div>
            {/* Hero Section */}
            <FlipbookIframeCatalog />
        </div>
    );
};

export default CatalogPage;