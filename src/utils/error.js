const ERROR_CODE = {
    "Request failed with status code 422" : 'Пользователь с таким  номером телефона не найден!',
    "Request failed with status code 401" : "Не верно указан пароль!",

    auth: 'Пожалуйста войдите в систему или зарегистрируйтесь'
}

export function error(code){
    return ERROR_CODE[code] ? ERROR_CODE[code] : 'Нет связи с интернетом или сервер не отвечает!'
}