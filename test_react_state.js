let prevPlayers = [{id: '1', name: 'renato'}];
let existingPlayerIdsToUpdate = ['1'];
let newPlayers = [{id: '2', name: 'joao'}];

const updatedPlayers = prevPlayers.map((p) =>
  existingPlayerIdsToUpdate.includes(p.id)
    ? { ...p, isAvailable: true, arrivedAt: p.arrivedAt || Date.now() }
    : p
);
let finalPlayers = [...updatedPlayers, ...newPlayers];
console.log(finalPlayers);

let prevSession = [];
const newIds = newPlayers.map((p) => p.id);
const existingIdsToAdd = existingPlayerIdsToUpdate.filter(
  (id) => !prevSession.includes(id)
);
let finalSession = [...prevSession, ...newIds, ...existingIdsToAdd];
console.log(finalSession);
