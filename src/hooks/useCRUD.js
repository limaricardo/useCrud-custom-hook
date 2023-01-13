// custom hook
// http://localhost:5000/user

const useCRUD = ({ entity }) => {
  const create = (i) => console.log(`create ${entity} ${i}`);
  const retrieve = () => console.log("retrieve");
  const update = () => console.log("update");
  const remove = () => console.log("remove");

  return {
    create,
    retrieve,
    update,
    remove,
  };
};

export default useCRUD;


