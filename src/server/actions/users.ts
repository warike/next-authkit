"server-only"

export async function findAllUsers(){
    try {
      console.log("findAllUsers: ")
      return [];
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

export const removeUserById = async (id: string) => {
    try{
        console.log("RemoveUser: ", id)
    }catch(e){
        console.log("Error: ", e)
    } 
}