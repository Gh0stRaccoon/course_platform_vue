const getUser = async() => {
    let cursos = await fetch('https://rest-courses-api.herokuapp.com/api/v1/users/me')
    let cursosJson = await cursos.json()
    return cursosJson
}

const getCourses = async(course = '') =>{
    let cursos = await fetch(`https://rest-courses-api.herokuapp.com/api/v1/courses/${course}`)
    let cursosJson = await cursos.json();
    let response = course != '' ? cursosJson : cursosJson.data
    return response
}

export {
    getUser,
    getCourses
};