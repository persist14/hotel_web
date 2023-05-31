export declare interface EmitEvent {
	(e: "getInputValue", val: string): void;
	(e: 'updateInputType'): void
}

export declare interface NavOpts {
	title?: string
}