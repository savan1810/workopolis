import axios from 'axios'
import cheerio from 'cheerio'



const searchJobs = async(name,city) => {
    try {
        
        const url = `/jobs-guest/jobs/api/seeMoreJobPostings/search?keywords=${name}&location=${city}&trk=public_jobs_jobs-search-bar_search-submit&pageNum=0&start=5`

        const response = await axios.get(url);

        if (response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html);
            const jobListings = [];

            $('li').each((index, element) => {
                const title = $(element).find('h3.base-search-card__title').text().trim();
                const company = $(element).find('h4.base-search-card__subtitle a').text().trim();
                const location = $(element).find('span.job-search-card__location').text().trim();
                const benefits = $(element).find('div.result-benefits span.result-benefits__text').text().trim();
                const posted_time = $(element).find('time.job-search-card__listdate').text().trim();

                const jobListing = {
                    title,
                    company,
                    location,
                    benefits,
                    posted_time,
                };

                jobListings.push(jobListing);
            });

            const jobListingsJSON = JSON.stringify(jobListings, null, 2);
            const json = JSON.parse(jobListingsJSON);
            return json
        } else {
            console.error(`Request failed with status code: ${response.status}`);
            return "Request failed"
        }
    } catch (error) {
        console.error(`Error making the request: ${error.message}`);
        return "Internal server error"
    }
}

export default searchJobs