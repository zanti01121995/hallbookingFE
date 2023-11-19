import { mongoUrl } from "./config";
let url = mongoUrl + '/createroom';
export const getRoom = async () => {
    const response = await fetch(url);
    const rooms = await response.json();
    return rooms;
}

export const getRoom2 = async (data) => {
    const response = await fetch(url + "/" + data);
    const rooms = await response.json();
    return rooms;
}

export const createRoom = async (data) => {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const room = await response.json();
    return room;
}

export const deleteRoom = async (data) => {
    const response = await fetch(url + '/' + `${data}`,
        {
            method: "DELETE",
        }
    );
    await response.json();

}

export const updateRoom = async (data, roomData) => {
    const response = await fetch(url + '/' + data,
        {
            method: 'PUT',
            body: JSON.stringify(roomData),
            headers: { 'Content-Type': 'application/json' }
        });
    const room = await response.json();
    return room;

};


