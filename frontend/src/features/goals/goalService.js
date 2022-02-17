import axios from 'axios';
// import { json } from 'express/lib/response';

const API_URL = '/api/goals/';

// Create new goal
const createGoal = async (goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(API_URL, goalData, config);

    return response.data;
};

// Get user goals
const getGoals = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(API_URL, config);

    return response.data;
};

const deleteGoal = async (goalId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.delete(API_URL + goalId, config);
    return response.data;
};

// const updateGoal = async (goalData, token) => {
// const config = {
//     headers: {
//         Authorization: `Bearer ${token}`,
//     },
// };
//     axios.put(API_URL, goalData);
// };

const goalService = {
    getGoals,
    createGoal,
    deleteGoal,
    //     updateGoal,
};

export default goalService;
