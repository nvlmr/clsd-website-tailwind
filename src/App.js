import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';




import Home from './pages/Homepage';

import NewsEventDetail from "./views/EventDetailView";
import AllNewsEvent from "./views/AllNewsEvent";
import Calendar from "./views/Calendar";


import AllLiterature from "./views/AllLiterature";

import AboutRU from "./pages/ResearchUnit";    
import Molbio from "./views/Molbio";
import Analytical from "./views/Analytical";
import FoodInnovation from "./views/FoodInnovation";
import Aquaculture from "./views/Aquaculture";
import GeneralFacilities from "./views/GeneralFacilities";
import ResearchEquipment from "./pages/EquipmentPage";


import AboutCLSD from "./pages/CLSD";
import AllClsdProject from "./pages/ClsdProjectPage";
import ClsdProjectDetail from "./views/ClsdProjectDetailView";

import RnDPublication from "./pages/RnDPublication";

import CLSDPublication from "./pages/CLSDPublication";
import DOSTFundedProject from "./pages/DOSTFundedProject";


import AboutRnD from "./pages/RnD";
import RnDProject from "./pages/RnDProject";

import ResearchTeam from "./pages/ResearchTeam";
import ContactUs from "./pages/ContactPage";
import Esentry from "./pages/Esentry";




//import Login from './components/Login';
// import Register from './components/Register';
import Dashboard from './protected_pages/dashboard';

import UserList from './protected_pages/userpage';
import User from './protected_components/User';

import Profile from './protected_pages/profile';
import Change_Pasword from './protected_pages/change_password';



import EventList from './protected_pages/eventpage';
import EventAdd from './protected_components/EventAdd';
import Event from './protected_components/Event';



import AvpList from './protected_components/AvpList';
import AvpAdd from './protected_components/AvpAdd';
import Avp from './protected_components/Avp';


import CollectionList from './protected_pages/CollectionPage';
import CollectionAdd from './protected_components/CollectionAdd';
import Collection from './protected_components/Collection';


import LiteratureList from './protected_pages/LiteraturePage';
import LiteratureAdd from './protected_components/LiteratureAdd';
import Literature from './protected_components/Literature';

import EquipmentList from './protected_pages/EquipmentPage';
import EquipmentAdd from './protected_components/EquipmentAdd';
import Equipment from './protected_components/Equipment';


import ClsdProjectList from './protected_pages/ClsdProjectPage';
import ClsdProjectAdd from './protected_components/ClsdProjectAdd';
import ClsdProject from './protected_components/ClsdProject';


import ResearcherList from './protected_pages/ResearcherPage';
import ResearcherAdd from './protected_components/ResearcherAdd';
import Researcher from './protected_components/Researcher';

import RNDProjectList from './protected_pages/RNDProjectPage';
import RNDProjectAdd from './protected_components/RNDProjectAdd';
import RNDProject from './protected_components/RNDProject';

import PublicationList from './protected_pages/PublicationPage';
import PublicationAdd from './protected_components/PublicationAdd';
import Publication from './protected_components/Publication';

import TagList from './protected_pages/TagPage';
import TagAdd from './protected_components/TagAdd';


import CalendarEvent from './protected_pages/Calendar';



import AllVideoGallery from "./views/AllVideoGallery";
import AllIECMaterial from "./views/AllIec";

import UseScrollToTop from './ScrollTop';
import ScrollToTop from 'react-scroll-to-top';
import './pages/newheader.style.css';
import AuthService from './services/auth.service';

const RequireAuth = ({ children }) => {
  try {
    const user = AuthService.getCurrentUser();


    if (!user.roles.includes("ROLE_ADMIN") && !user.roles.includes("ROLE_MODERATOR") && !user.roles.includes("ROLE_USER"))  {
      return <Navigate to="/login"  />;
    }

    return children;
  } catch (error) {
    // Handle the error here. For example, you could redirect to an error page:
    return <Navigate to="/login" />;
  }
};







const App = () => (

  
  <div>
    <Router >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/lake-sustainable-development" element={<Home />} />

      
   

         {/* <Route exact path="/login" element={<Login />} />
             <Route exact path="/register" element={<Register />} /> */}

      <Route  path="/news-event/:id"    element={<NewsEventDetail />} />   
       <Route exact path="/all-news-event"    element={<AllNewsEvent />} />
       <Route exact path="/all-calendar-event"    element={<Calendar />} />

    
       <Route exact path="/all-literature"    element={<AllLiterature />} />

       <Route exact path="/about-research-units"    element={<AboutRU />} />     

                    <Route exact path="/molbio"    element={<Molbio />} />
                    <Route exact path="/analytical"    element={<Analytical />} />
                    <Route exact path="/food-innovation"    element={<FoodInnovation />} />
                    <Route exact path="/aquaculture"    element={<Aquaculture />} />
                    <Route exact path="/general-facilities"    element={<GeneralFacilities />} />
                    <Route exact path="/all-equipment"    element={<ResearchEquipment />} />


                    <Route exact path="/about-CLSD"              element={<AboutCLSD />} />
                    <Route exact path="/all-clsd-project"    element={<AllClsdProject />} />
                    <Route  path="/clsd-project/:id"    element={<ClsdProjectDetail />} />   

                    <Route exact path="/R&D-publication"    element={<RnDPublication />} />
                    
                    <Route exact path="/CLSD-publication"    element={<CLSDPublication />} />
                    

                    <Route exact path="/about-R&D"    element={<AboutRnD />} />
                    <Route exact path="/rnd_project"    element={<RnDProject />} />

                    <Route exact path="/DOST-Funded-Project"    element={<DOSTFundedProject />} />

      <Route exact path="/research-team"    element={<ResearchTeam />} />
       <Route exact path="/Contact-Us"    element={<ContactUs />} />
       <Route exact path="/E-sentry"    element={<Esentry />} />


        <Route path="/dashboard" element={<RequireAuth>   <Dashboard />  </RequireAuth>} />

        <Route path="/user_list" element={<RequireAuth>   <UserList />  </RequireAuth>} />
        <Route path="/user/:id" element={<RequireAuth>   <User />  </RequireAuth>} />

        <Route path="/profile" element={<RequireAuth>   <Profile />  </RequireAuth>} />
        <Route path="/change_password" element={<RequireAuth>   <Change_Pasword />  </RequireAuth>} />





        <Route path="/event_list" element={<RequireAuth>   <EventList />  </RequireAuth>} />
        <Route path="/event_add" element={<RequireAuth>   <EventAdd />  </RequireAuth>} />
        <Route path="/event/:id" element={<RequireAuth>   <Event />  </RequireAuth>} />
      

        <Route path="/avp_list" element={<RequireAuth>   <AvpList/>  </RequireAuth>} />
        <Route path="/avp_add" element={<RequireAuth>   <AvpAdd/>  </RequireAuth>} />
        <Route path="/avp/:id" element={<RequireAuth>   <Avp/>  </RequireAuth>} />

        <Route path="/collection_list" element={<RequireAuth>   <CollectionList />  </RequireAuth>} />
        <Route path="/collection_add" element={<RequireAuth>   <CollectionAdd />  </RequireAuth>} />
        <Route path="/collection/:id" element={<RequireAuth>   <Collection />  </RequireAuth>} />


        <Route path="/literature_list" element={<RequireAuth>   <LiteratureList />  </RequireAuth>} />
        <Route path="/literature_add" element={<RequireAuth>   <LiteratureAdd />  </RequireAuth>} />
        <Route path="/literature/:id" element={<RequireAuth>   <Literature />  </RequireAuth>} />


        <Route path="/equipment_list" element={<RequireAuth>   <EquipmentList />  </RequireAuth>} />
        <Route path="/equipment_add" element={<RequireAuth>   <EquipmentAdd />  </RequireAuth>} />
        <Route path="/equipment/:id" element={<RequireAuth>   <Equipment />  </RequireAuth>} />

        

        <Route path="/researcher_list" element={<RequireAuth>   <ResearcherList />  </RequireAuth>} />
        <Route path="/researcher_add" element={<RequireAuth>   <ResearcherAdd />  </RequireAuth>} />
        <Route path="/researcher/:id" element={<RequireAuth>   <Researcher />  </RequireAuth>} />

        <Route path="/clsd_project_list" element={<RequireAuth>   <ClsdProjectList />  </RequireAuth>} />
        <Route path="/clsd_project_add" element={<RequireAuth>   <ClsdProjectAdd />  </RequireAuth>} />
        <Route path="/clsd_project/:id" element={<RequireAuth>   <ClsdProject />  </RequireAuth>} />
      
        <Route path="/rnd_project_list" element={<RequireAuth>   <RNDProjectList />  </RequireAuth>} />
        <Route path="/rnd_project_add" element={<RequireAuth>   <RNDProjectAdd />  </RequireAuth>} />
        <Route path="/rnd_project/:id" element={<RequireAuth>   <RNDProject />  </RequireAuth>} />

        <Route path="/publication_list" element={<RequireAuth>   <PublicationList />  </RequireAuth>} />
        <Route path="/publication_add" element={<RequireAuth>   <PublicationAdd />  </RequireAuth>} />
        <Route path="/publication/:id" element={<RequireAuth>   <Publication />  </RequireAuth>} />


        <Route path="/tag_list" element={<RequireAuth>   <TagList />  </RequireAuth>} />
        <Route path="/tag_add" element={<RequireAuth>   <TagAdd />  </RequireAuth>} />


        <Route path="/calendar-event" element={<RequireAuth>   <CalendarEvent />  </RequireAuth>} />



        <Route exact path="/all-video-gallery"    element={<AllVideoGallery />} />
        <Route exact path="/all-iec-material"    element={<AllIECMaterial />} />


      </Routes>
      <UseScrollToTop />
      <ScrollToTop smooth viewBox="0 0 24 24" svgPath="M18 15l-6-6-6 6" />
    </Router>
  </div>
);

export default App;
