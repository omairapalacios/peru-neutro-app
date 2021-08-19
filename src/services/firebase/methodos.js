import { db, auth, authAdmin } from './config';

export function addDocument(collectionName, object) {
  const key = db.ref(collectionName).push().key;
  db.ref(collectionName)
    .child(key)
    .set(object);
}

export function setDocumentById(collectionName, id, data) {
  db.ref(collectionName + '/' + id).set(data);
}

export async function deleteDocumentById(collectionName, id) {
  await db.ref(collectionName + '/' + id).remove();
}

export async function updateDocument(collectionName, docId, dataUpdated) {
  await db
    .ref(collectionName)
    .child(docId)
    .update(dataUpdated);
}

export async function getDocumentsOrderByChild(collectionName, query) {
  const { child, startAt, endAt } = query
  const result = await db.ref(collectionName)
    .orderByChild(child)
    .startAt(startAt)
    .endAt(endAt)
    .once('value');
  if (!result.val()) return [];
  return Object.values(result.val());
}

export async function getDocumentById(collectionName, id) {
  const result = await db.ref(collectionName + '/' + id).once('value');
  return result.val();
}

export async function getDocumentByQuery(collectionName, query) {
  const { key, value } = query;
  const query = await db
    .ref(collectionName)
    .orderByChild(key)
    .equalTo(value)
    .once('value');
  if (!query.val()) return [];
  return Object.values(query.val());
}

export async function getAllDocuments(collectionName) {
  try {
    const result = await db.ref(collectionName).once('value');
    if (!result.val()) return [];
    return Object.values(result.val()).map((e, i) => ({
      ...e,
      id: Object.keys(result.val())[i],
    }));
  } catch (error) {
    console.log(error);
  }
}

async function getAllDocumentsByQueryId(collectionName, query) {
  const { key, value } = query;
  const result = await db
    .ref(collectionName)
    .orderByChild(key)
    .equalTo(value)
    .once('value');
  if (!result.val()) return [];
  return Object.values(result.val()).map((e, i) => ({
    ...e,
    id: Object.keys(result.val())[i],
  }));
}

export function getSnapshotAllDocuments(collectionName, query) {
  const { key, value } = query;
  return new Promise((res) => {
    firebase
      .database()
      .ref(collectionName)
      .orderByChild(key)
      .equalTo(value)
      .on('value', (querySnapshot) => {
        if (!querySnapshot.val()) res([]);
        else {
          const array = Object.keys(querySnapshot.val()).map((key) => ({
            key,
            ...querySnapshot.val()[key],
          }));
          res(array);
        }
      });
  });
}