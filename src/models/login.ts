export declare interface InputOpts {
	types: string;
	preffix?: boolean;
	suffix?: boolean;
	prompt: string,
	shadow?: string
	isRead?: boolean
}
export declare interface PropOpts {
	opts: InputOpts
}

export declare interface UserOpts {
	username: string,
	password: string,
	email?: string,
	phone?: string
}