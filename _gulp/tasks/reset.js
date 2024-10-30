import {deleteAsync} from "del";

export async function reset () {
    return await deleteAsync(app.paths.distPath)
}
