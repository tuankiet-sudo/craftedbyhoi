//import { Button, Typography, Container, Grid } from '@mui/material';
//import { Link } from 'react-router-dom';
import FlipbookIframeCatalog from "./FlipbookIframeCatalog";
import { useParams } from "react-router-dom";

const CatalogPage = () => {
    // Parse page param as integer, add 1 if exists
    const pageParam = useParams<{ page?: string }>().page;
    let pageNum: number | undefined = pageParam ? Number(pageParam) + 1 : undefined;
    console.log("CatalogPage page:", pageParam, "Actual shown page:", pageNum);

    if (pageNum !== undefined) {
        const src = `https://heyzine.com/flip-book/a799c6d307.html#page/${pageNum}`;
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