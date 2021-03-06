export const ROUTER_STUDENT = "";

export const ROUTER_PACK = `${ROUTER_STUDENT}/pack`;
export const ROUTER_PACK_PARAM_ID = `${ROUTER_PACK}/:id`;

export const ROUTER_RESULT = "/result";
export const ROUTER_REVIEW = "/review";
export const ROUTER_RESULT_PARAM_ID = `${ROUTER_RESULT}/:id`;

export const ROUTER_LECTURER = "/lecturer";

export const ROUTER_QUESTION_PACK = `${ROUTER_LECTURER}/question-pack`;
export const ROUTER_QUESTION_PACK_EDIT_WITH_PARAM = `${ROUTER_QUESTION_PACK}/edit/:id`;
export const ROUTER_QUESTION_PACK_EDIT = `${ROUTER_QUESTION_PACK}/edit`;
export const ROUTER_QUESTION_PACK_ADD = `${ROUTER_QUESTION_PACK}/add`;

export const ROUTER_QUESTION = `${ROUTER_LECTURER}/question`;
export const ROUTER_QUESTION_ADD = `${ROUTER_LECTURER}/question/add`;
export const ROUTER_QUESTION_EDIT_PARAM_ID = `${ROUTER_LECTURER}/question/edit/:id`;
export const ROUTER_QUESTION_EDIT_OR_ADD = `${ROUTER_QUESTION}/(edit|add)`;
export const ROUTER_QUESTION_EDIT_ID = `${ROUTER_QUESTION}/edit`;

export const ROUTER_STUDENT_MANAGEMENT = `${ROUTER_LECTURER}/student-management`;
export const ROUTER_STUDENT_MANAGEMENT_ADD = `${ROUTER_STUDENT_MANAGEMENT}/add`;
export const ROUTER_STUDENT_MANAGEMENT_EDIT = `${ROUTER_STUDENT_MANAGEMENT}/edit/:id`;


export const ROUTER_CLASS_ROOM = `${ROUTER_LECTURER}/classroom`;
export const ROUTER_CLASS_ROOM_ADD = `${ROUTER_CLASS_ROOM}/add`;
export const ROUTER_CLASS_ROOM_EDIT = `${ROUTER_CLASS_ROOM}/edit`;

export const ROOT_URL = 'http://techkids.vn:6996';
export const API_URL = `${ROOT_URL}/api`;

export const AUTH = `${API_URL}/auth`;
export const SIGN_IN = `${API_URL}/signin`;

export const API_QUESTIONS = `${API_URL}/questions`;
export const API_QUESTION_PACKS = `${API_URL}/questionpacks`;
export const API_RESULT = `${API_URL}/results`;
export const API_STUDENT = `${API_URL}/students`;
export const API_CLASSROOM = `${API_URL}/classrooms`
