import DashboardNav from "../components/DashboardNav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import CreateAlbum from "../components/CreateAlbum";


import {
    Flex
} from '@chakra-ui/react';



const NewAlbum = () => {
    return (
        <main>
            <DashboardNav />
            <div>
                <Flex>
                    <Sidebar children={undefined} />
                    <CreateAlbum />
                </Flex>
            </div>
            <Footer />
        </main>
    )
}

export default NewAlbum;