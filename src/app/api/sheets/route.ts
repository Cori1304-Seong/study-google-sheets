import { getData } from '@/app/actions/getData';

export async function GET() {
	const { data } = await getData();

	return Response.json({
		fields: data ? data[0] : [],
		data: data?.slice(1),
	});
}
