export function generateEmployee() {

    const randomNumber = Date.now();

    return {
        firstName: `Valnei${randomNumber}`,
        lastName: `QA${randomNumber}`
    };

}