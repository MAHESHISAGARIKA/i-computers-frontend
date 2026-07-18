import { createClient } from "@supabase/supabase-js";

const key ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15c3Vnd29udHNkZ3VlaGl1YmN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQzMjM0MjYsImV4cCI6MjA5OTg5OTQyNn0.yDI5OadC6s5t6j2BfrHhi-LZSOB2E9D8YRlld3r_d-c";
const url = "https://mysugwontsdguehiubcy.supabase.co"

const supabase = createClient(url, key);

export default function uploadMedia(file) {
	return new Promise((resolve, reject) => {
		if (file == null) {
			reject("No file provided");
		} else {
			const timestamp = new Date().getTime();
			const fileName = timestamp + "_" + file.name;

			supabase.storage
				.from("images")
				.upload(fileName, file)
				.then(() => {
					const publicUrl = supabase.storage
						.from("images")
						.getPublicUrl(fileName).data.publicUrl;
					
                    resolve(publicUrl);
				}).catch((error) => {
                    reject(error);
                });
		}
	});
}
