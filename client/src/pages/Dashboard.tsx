import DashboardNav from "../components/DashboardNav"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"


const Dashboard = () => {
    return ( 
        <main>
        <DashboardNav />
            <div>
                <Sidebar children={undefined} />
                <div>
                    <h1>Favorite Albums</h1>
                </div>
                <div>
                    <h1>Friends Albums</h1>
                </div>
            </div>
        <Footer />
        </main>






    )
}

export default Dashboard