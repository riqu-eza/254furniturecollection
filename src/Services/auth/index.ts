
export const register_me = async (formData : any) => {

    const url = "/api/auth/register";
    console.log("Registering at URL =>", url); // ✅ Add this log

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in register (service) => ', error);
    }
}

export const login_me = async (formData : any) => {

    const url = "/api/auth/login";
    console.log("Registering at URL =>", url); // ✅ Add this log

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in login (service) => ', error);
    }
}



export const forget_password = async (formData : any) => {
    
    const url = "/api/auth/forgetPassword";
    console.log("Registering at URL =>", url); // ✅ Add this log

    try {
        const res = await fetch( url , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in forget Password (service) => ', error);
    }
}

