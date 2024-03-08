export function ErrorPage({ error }: { error: string }): JSX.Element {
	return (
		<div>
			<h1>{error}</h1>
		</div>
	);
}
