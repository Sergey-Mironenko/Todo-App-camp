export const enum ROUTER_KEYS {
  ALL_MATCH = '/*',
	MAIN = '/',
	LOGIN = '/login',
	VERIFY = '/verify',
	RESET = '/reset/:verificationToken',
	REGISTRATION = '/registration',
	ACTIVATION = '/activate/:activationToken',
	PROFILE = '/profile',
	DASHBOARD = '/dashboard',
	CHANGENAME = '/changeName',
	CHANGEPASSWORD = '/changePassword',
	ADDTODO = '/addTodo',
	TODOINFO = '/dashboard/:id',
}

export const enum STORAGE_KEYS {
  ACCESSTOKEN = 'accessToken',
};
