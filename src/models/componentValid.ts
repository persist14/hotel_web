export declare interface EmitEvent {
	(e: "getInputValue", val: string): void;
	(e: 'updateInputType'): void
}