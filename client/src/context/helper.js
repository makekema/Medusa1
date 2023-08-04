export const isUserAlreadyInTheRoom = (userRoomList, roomName) => {
  const rooms = userRoomList.rooms?.some((r) => r.name === roomName);
  return rooms.length > 0;
};

export function createNewRoom (roomName, creator) {
  return {
    name: roomName,
    creator,
  };
}

export const roomExists = (chatrooms, roomName) => {
  const rooms = chatrooms.some((c) => c.name === roomName);
  return rooms.length > 0;
};

export const removeRoomFromUserRoomListState = (roomList, roomName) => {
  const updatedRooms = roomList.rooms.filter(
    (r) => r.name !== roomName
  );
  const updatedRoomList = { ...roomList };
  updatedRoomList.rooms = [...updatedRooms];
  console.log('roomList: ', updatedRoomList);
  return updatedRoomList;
};

export const addRoomToUserRoomListState = (roomList, room) => {
  const updatedRooms = [
    ...roomList.rooms, room,
  ];
  const updatedRoomList = { ...roomList };
  updatedRoomList.rooms = [...updatedRooms];
  console.log('roomList: ', updatedRoomList);
  return updatedRoomList;
};