import Image from 'next/image';
import type { Metadata } from 'next'
import Education from './components/education';
import Projects from './components/projects';
import Inprogress from './components/inprogress';
import Skills from './components/skills';
import Social from './components/social';
import Avatar from '../../assets/butter.png';

const Page = () => {

	return (
		<div className="flex flex-col gap-8 mx-4 my-16 md:mx-0">
			<div className="flex flex-col-reverse gap-8 md:flex-row">
				<div className="flex flex-col gap-4">
					<h1 className="text-4xl font-medium">
						Sijala <span className="text-primary">Bhattarai</span>
					</h1>
					<p>
						Developer | <span className="font-bold">Bhetiyo </span> <span className="px-2 py-1 text-xs rounded-md text-primary bg-primary/10">
							<span>NEW</span>
						</span>
					</p>
					<p>Namaskar!</p>
					<p className="text-justify">
						My name is Sijala Bhattarai and I'm an undergraduate computer application student based in Jhapa. I enjoy developing web applications, and in my free time, I love diving into the world of art and drawing. Exploring various artistic techniques and styles fuels my passion for creativity. Whether it's sketching intricate details or experimenting with vibrant colors, I find joy in bringing my imagination to life on paper or digital canvas.
					</p>
				</div>
				<Image
					src={Avatar}
					alt="Sijala Bhattarai"
					className="object-cover w-auto h-64 md:w-32 md:h-auto grayscale ring-2"
					width={300}
					height={300}
					placeholder='blur'
				/>
			</div>
			<div className="flex gap-2">
				<div className="px-2 text-sm rounded-md text-primary bg-primary/10" aria-label="DoB: 2002AD">
					2002
				</div>
				<div className="px-2 text-sm rounded-md text-primary bg-primary/10" aria-label="Blood group: B+VE">
					B+VE
				</div>
				<div className="px-2 text-sm rounded-md text-primary bg-primary/10" aria-label="Height: 5 feet 2 inches">
					<span>5'2</span>
				</div>
			</div>

			<Education />

			<Projects />

			{/* <Inprogress /> */}

			<Skills />

			<Social />

			<div className="flex flex-col gap-4">
				<h2 className="text-2xl font-medium">Contact</h2>
				<ul className="list-inside">
					<li>
						<span>{'email: '}</span>
						<a href="mailto:sijalabhattarai012@gmail.com" className="italic underline text-primary">
							sijalabhattarai012@gmail.com
						</a>
					</li>
					<li>
						<span>{'full website: '}</span>
						<a href="https://sijalabhattarai.com.np/" target="_blank" className="italic underline text-primary">
							sijalabhattarai.com.np
						</a>
					</li>
				</ul>
			</div>

			<p className="text-xs">
				{'Sijala Bhattarai ' + new Date().getFullYear()}, <a href='https://github.com/bhaskarrijal/bhaskarrijal-min' target='_blank' className='italic underline text-primary'>edit origin site</a>
			</p>
		</div>
	);
};

export default Page;