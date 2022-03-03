import React from 'react';
import AllDistributionList from '../AllDistribuationList/AllDistributionList';
import AllFoods from '../AllFoods/AllFoods';
import AllStudents from '../AllStudents/AllStudents';


const Home = () => {
    return (
        <div>
            <AllFoods />
            <AllStudents />
            <AllDistributionList />
        </div>
    );
};

export default Home;