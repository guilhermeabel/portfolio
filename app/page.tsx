// import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        <span className="text-white-200">I'm </span><span className="text-blue-500 ">Guilherme Abel</span>
      </h1>
      <p className="mb-4">
        {`Software engineer with 6+ years building systems across different stacks and domains. I focus on solving real problems with simple, scalable solutions while balancing technical quality with business needs. Recently exploring how AI can boost team productivity. I take ownership, adapt quickly, and look for effective ways to get things done.`}
      </p>

	  <p className="mb-4">
		  <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">PHP</span>
		  <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">GoLang</span>
		  <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">TypeScript</span>
		  <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">React</span>
		  <span className="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">SQL</span>
		  <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">NoSQL</span>
		  <span className="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">JavaScript</span>
	</p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
