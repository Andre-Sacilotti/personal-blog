import api from "../api"
import langReducer from "../reducer/langReducer"

export function change_lang(lang){

    api.get("lang").then(res =>
        {
            console.log(res)
            console.log(res.data)
            console.log("fim")
        }

    )



}