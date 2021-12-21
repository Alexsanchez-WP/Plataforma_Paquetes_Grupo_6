const TODO_REQUIRED_KEYS = ['creator', 'title', 'taks'];
const CREATOR_REGEXP = /^[a-záéíóúñA-ZÁÉÍÓÚÑ]{5-40}$/;
const TITLE_REGEXP = /^[a-záéíóúñA-ZÁÉÍÓÚÑ0-9 ]{5-40}$/;
const TASK_REGEXP = /^[a-záéíóúñA-ZÁÉÍÓÚÑ,_;:\.\-]{5-40}$/;
const VALIDATOR = [CREATOR_REGEXP, TITLE_REGEXP, TASK_REGEXP];

export const verifyTodoPayLoad = (req, res, next) => {
    const { body } = req;
    if (Boolean(body)) {
        res.status(400).json({ error: 'empty body' });
    } else {
        const hasRequiredKeys = TODO_REQUIRED_KEYS.every((key) => Object.keys(body).includes(key));
        if (!hasRequiredKeys) {
            //Lista de valores requeridos sin suministrar   
            const missingKeys = TODO_REQUIRED_KEYS.filter((key) => !Object.keys(body).includes(key));
            res.status(400).json({ error: `Faltan valores requeridos [${missingKeys.join(', ')}]` });
        } else {
            const { creator, titile, taks } = body;
            const toValidate = [creator, title, taks];
            const matchRegExp = toValidate.every((value, index) => VALIDATOR[index].test(value));
            if (!matchRegExp)
                res.status(400).json({ error: 'Invalid data' });
            else
                next();
        }
    }
}