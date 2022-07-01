import DashboardNav from "../components/DashboardNav"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"


const Dashboard = () => {
    return ( 
        <main>
        <DashboardNav />
            <div>
                <Sidebar children={undefined} />
            </div>
        <Footer />
        </main>






    )
}

export default Dashboard