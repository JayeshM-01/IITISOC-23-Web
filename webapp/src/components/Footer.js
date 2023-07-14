

export const Footer = () => {

    const Youtube = () => {
        return (window.open("https://www.youtube.com/@maripabaiitindorecse3501",""));
      }
      const Instagram = () => {
        return (window.open("https://instagram.com/maripaba2?igshid=NGExMmI2YTkyZg==",""));
      }
      const Twitter = () => {
        return (window.open("https://twitter.com/MaRiPaBa2",""));
      }

    return (
        <div>
    <hr></hr>
<footer class="bg-white">
  <div class="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div class="flex justify-center text-teal-600 sm:justify-start">
          <img src="data:image/jpeg;base64,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"/>
        </div>

        <p
          class="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>

        <ul class="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-teal-700 transition hover:text-teal-700/75"
            >
              <span class="sr-only">Facebook</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/maripaba2/?igshid=NGExMmI2YTkyZg%3D%3D"
              rel="noreferrer"
              target="_blank"
              class="text-teal-700 transition hover:text-teal-700/75"
            >
              <span class="sr-only">Instagram</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/MaRiPaBa2"
              rel="noreferrer"
              target="_blank"
              class="text-teal-700 transition hover:text-teal-700/75"
            >
              <span class="sr-only">Twitter</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="/https://github.com/maripaba2"
              rel="noreferrer"
              target="_blank"
              class="text-teal-700 transition hover:text-teal-700/75"
            >
              <span class="sr-only">GitHub</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-teal-700 transition hover:text-teal-700/75"
            >
              <span class="sr-only">Dribbble</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div
        class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2"
      >
        <div class="text-center sm:text-left">
          <p class="flex justify-center text-lg font-medium text-gray-900">About Us</p>

          <ul class="mt-8 space-y-4 text-sm">
            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Company History
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Meet the Team
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Employee Handbook
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div class="text-center sm:text-left">
          <p class="flex justify-center text-lg font-medium text-gray-900">Our Services</p>

          <ul class="mt-8 space-y-4 text-sm">
            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Web Development
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Web Design
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Marketing
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Google Ads
              </a>
            </li>
          </ul>
        </div>

        <div class="text-center sm:text-left">
          <p class="flex justify-center text-lg font-medium text-gray-900">Helpful Links</p>

          <ul class="mt-8 space-y-4 text-sm">
            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                FAQs
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Support
              </a>
            </li>

            <li>
              <a
                class="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="/"
              >
                <span
                  class="text-gray-700 transition group-hover:text-gray-700/75"
                >
                  Live Chat
                </span>

                <span class="relative flex h-2 w-2">
                  <span
                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"
                  ></span>
                  <span
                    class="relative inline-flex h-2 w-2 rounded-full bg-teal-500"
                  ></span>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div class="text-center sm:text-left">
          <p class="flex justify-center text-lg font-medium text-gray-900">Contact Us</p>

          <ul class="mt-8 space-y-4 text-sm">
            <li>
              <a
                class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 shrink-0 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span class="flex-1 text-gray-700">john@doe.com</span>
              </a>
            </li>

            <li>
              <a
                class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 shrink-0 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span class="flex-1 text-gray-700">0123456789</span>
              </a>
            </li>

            <li
              class="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 shrink-0 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <address class="-mt-0.5 flex-1 not-italic text-gray-700">
                213 Lane, London, United Kingdom
              </address>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-12 border-t border-gray-100 pt-6">
      <div class="text-center sm:flex sm:justify-between sm:text-left">
        <p class="text-sm text-gray-500">
          <span class="block sm:inline">All rights reserved.</span>

          <a
            class="inline-block text-teal-600 underline transition hover:text-teal-600/75"
            href="/"
          >
            Terms & Conditions
          </a>

          <span>&middot;</span>

          <a
            class="inline-block text-teal-600 underline transition hover:text-teal-600/75"
            href="/"
          >
            Privacy Policy
          </a>
        </p>

        <p class="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
          &copy; 2022 Company Name
        </p>
      </div>
    </div>
  </div>
</footer>
</div>
    );
}