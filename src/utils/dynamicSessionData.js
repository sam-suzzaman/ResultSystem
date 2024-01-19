const sessionOptions = [];

// Function to get the current year
const getCurrentYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
};

// Function to create session objects
const createSession = (id, year) => {
    return {
        _id: id,
        session: `${year}-${year + 1}`,
    };
};

// Create 15 sessions (5 from past to present, 10 from present to future)
for (let i = 0; i < 15; i++) {
    const currentYear =
        getCurrentYear() - (i < 5 ? 5 - i : 0) + (i >= 5 ? i - 5 : 0);
    sessionOptions.push(createSession(i + 1, currentYear));
}

console.log(sessionOptions);

export default sessionOptions;
