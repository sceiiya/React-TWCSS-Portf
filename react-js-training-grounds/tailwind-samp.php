<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- <link href="https://cdn.tailwindcss.com/2.2.19/tailwind.min.css" rel="stylesheet"> -->
  <link rel="stylesheet" href="src/index.css">
  <title>Tailwind xamp</title>
</head>
<body class="flex flex-col">
  <!-- navbar -->
  <nav class="bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <a href="./" class="flex items-center text-white text-2xl font-bold">NAme</a>
        </div>
        <div class="flex">
          <a href="#" class="insideNav">Home</a>
          <a href="#" class="text-red-500 hover:bg-red-200 hover:text-red-900 px-3 py-2 rounded-md text-sm font-medium">About</a>
          <a href="#" class="insideNav">Contact</a>
        </div>
      </div>
    </div>
  </nav>

  <!-- sections -->
  <div class="container mx-auto py-8">
    <div class="flex justify-between">
      <div class="w-1/2">
        <h2 class="text-2xl font-bold mb-4">Profile Section 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor neque non sapien vulputate, ac gravida nulla rhoncus. Integer gravida gravida elementum. Duis dapibus risus eget enim placerat consectetur. Mauris auctor felis id velit hendrerit, ac iaculis arcu blandit. Nulla vitae cursus dui.</p>
      </div>
      <div class="w-1/2">
        <h2 class="text-2xl font-bold mb-4">Profile Section 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor neque non sapien vulputate, ac gravida nulla rhoncus. Integer gravida gravida elementum. Duis dapibus risus eget enim placerat consectetur. Mauris auctor felis id velit hendrerit, ac iaculis arcu blandit. Nulla vitae cursus dui.</p>
      </div>
    </div>
  </div>

  <!-- button list sample -->
  <div class="max-w-sm mx-auto mt-10">
    <ul class="space-x-4 flex justify-evenly">
      <li>
        <button class="w-full px-4 py-2 bg-blue-400 hover:bg-blue-800 focus:bg-slate-500 text-white rounded-md shadow-md focus:outline-double">Button 1</button>
      </li>
      <li>
        <button class="w-full px-4 py-2 bg-green-400 hover:bg-green-800 focus:bg-slate-500 text-white rounded-md shadow-md focus:outline-dashed">Button 2</button>
      </li>
      <li>
        <button class="w-full px-4 py-2 bg-red-400 hover:bg-red-800 focus:bg-slate-500 text-white rounded-md shadow-md focus:outline-dotted">Button 3</button>
      </li>
      <li>
        <button class="w-full px-4 py-2 bg-yellow-400 hover:bg-yellow-800 focus:bg-slate-500 text-white rounded-md shadow-md focus:outline-none">Button 4</button>
      </li>
    </ul>
  </div>

  <!-- dooter -->
  <footer class="bg-gray-900 text-white py-4 static bottom-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <p>Footer</p>
        <p> Copyright &copy; 2023 || All rights reserved.</p>
      </div>
    </div>
  </footer>

</body>
</html>