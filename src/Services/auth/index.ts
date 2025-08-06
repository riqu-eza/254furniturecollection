export const register_me = async (formData: any) => {
    const url = "/api/auth/register";
    console.log("Calling register API =>", url);

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in register (service) =>', error);
    }
};

export const login_me = async (formData: any) => {
    const url = "/api/auth/login";
    console.log("Calling login API =>", url);

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in login (service) =>', error);
    }
};

export const forget_password = async (formData: any) => {
    const url = "/api/auth/forgetPassword";
    console.log("Calling forget password API =>", url);

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in forgetPassword (service) =>', error);
    }
};
