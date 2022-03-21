import LayoutNav from '../components/LayoutNav';
import bookCoverExample from '../public/images/book.jpeg';
import AdminThumbnail from '../components/AdminThumbnail';
import Container from '../components/Container';
import { PlusIcon, ArrowLeftIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import AddModals from '../components/AddModals';

const myproducts = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <LayoutNav>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        title="add product"
        className="hover:bg-green-600 text-white z-10 fixed top-24 shadow-2xl right-4 bg-green-400 p-2 rounded-full"
      >
        <PlusIcon className="h-8 w-8" />
      </button>

      <Container>
        <AdminThumbnail
          bookID={14958325}
          imgUrl={bookCoverExample}
          title="Harry Potter"
          price="10000"
          dateAdded={'10-04-2002'}
          available="7"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam modi officia repudiandae adipisci voluptate deleniti quis tenetur eligendi vitae velit veniam nobis ea temporibus, vero fugiat voluptatem nisi magnam, dolor molestiae, cupiditate saepe fugit totam autem. Voluptatem impedit nostrum dolorum ab odio veniam voluptatibus necessitatibus accusantium, repellendus facere quae ad similique? Porro molestiae incidunt tenetur soluta quod molestias possimus?"
        />
        <AdminThumbnail
          bookID={14958325}
          imgUrl={bookCoverExample}
          title="Harry Potter"
          price="10000"
          dateAdded={'10-04-2002'}
          available="7"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam modi officia repudiandae adipisci voluptate deleniti quis tenetur eligendi vitae velit veniam nobis ea temporibus, vero fugiat voluptatem nisi magnam, dolor molestiae, cupiditate saepe fugit totam autem. Voluptatem impedit nostrum dolorum ab odio veniam voluptatibus necessitatibus accusantium, repellendus facere quae ad similique? Porro molestiae incidunt tenetur soluta quod molestias possimus?"
        />
        <AdminThumbnail
          bookID={14958325}
          imgUrl={bookCoverExample}
          title="Harry Potter"
          price="10000"
          dateAdded={'10-04-2002'}
          available="7"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam modi officia repudiandae adipisci voluptate deleniti quis tenetur eligendi vitae velit veniam nobis ea temporibus, vero fugiat voluptatem nisi magnam, dolor molestiae, cupiditate saepe fugit totam autem. Voluptatem impedit nostrum dolorum ab odio veniam voluptatibus necessitatibus accusantium, repellendus facere quae ad similique? Porro molestiae incidunt tenetur soluta quod molestias possimus?"
        />
        <AdminThumbnail
          bookID={14958325}
          imgUrl={bookCoverExample}
          title="Harry Potter"
          price="10000"
          dateAdded={'10-04-2002'}
          available="7"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam modi officia repudiandae adipisci voluptate deleniti quis tenetur eligendi vitae velit veniam nobis ea temporibus, vero fugiat voluptatem nisi magnam, dolor molestiae, cupiditate saepe fugit totam autem. Voluptatem impedit nostrum dolorum ab odio veniam voluptatibus necessitatibus accusantium, repellendus facere quae ad similique? Porro molestiae incidunt tenetur soluta quod molestias possimus?"
        />
        <AdminThumbnail
          bookID={14958325}
          imgUrl={bookCoverExample}
          title="Harry Potter"
          price="10000"
          dateAdded={'10-04-2002'}
          available="7"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam modi officia repudiandae adipisci voluptate deleniti quis tenetur eligendi vitae velit veniam nobis ea temporibus, vero fugiat voluptatem nisi magnam, dolor molestiae, cupiditate saepe fugit totam autem. Voluptatem impedit nostrum dolorum ab odio veniam voluptatibus necessitatibus accusantium, repellendus facere quae ad similique? Porro molestiae incidunt tenetur soluta quod molestias possimus?"
        />
        <AdminThumbnail
          bookID={14958325}
          imgUrl={bookCoverExample}
          title="Harry Potter"
          price="10000"
          dateAdded={'10-04-2002'}
          available="7"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam modi officia repudiandae adipisci voluptate deleniti quis tenetur eligendi vitae velit veniam nobis ea temporibus, vero fugiat voluptatem nisi magnam, dolor molestiae, cupiditate saepe fugit totam autem. Voluptatem impedit nostrum dolorum ab odio veniam voluptatibus necessitatibus accusantium, repellendus facere quae ad similique? Porro molestiae incidunt tenetur soluta quod molestias possimus?"
        />
        <AdminThumbnail
          bookID={14958325}
          imgUrl={bookCoverExample}
          title="Harry Potter"
          price="10000"
          dateAdded={'10-04-2002'}
          available="7"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam modi officia repudiandae adipisci voluptate deleniti quis tenetur eligendi vitae velit veniam nobis ea temporibus, vero fugiat voluptatem nisi magnam, dolor molestiae, cupiditate saepe fugit totam autem. Voluptatem impedit nostrum dolorum ab odio veniam voluptatibus necessitatibus accusantium, repellendus facere quae ad similique? Porro molestiae incidunt tenetur soluta quod molestias possimus?"
        />
        <AdminThumbnail
          bookID={14958325}
          imgUrl={bookCoverExample}
          title="Harry Potter"
          price="10000"
          dateAdded={'10-04-2002'}
          available="7"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam modi officia repudiandae adipisci voluptate deleniti quis tenetur eligendi vitae velit veniam nobis ea temporibus, vero fugiat voluptatem nisi magnam, dolor molestiae, cupiditate saepe fugit totam autem. Voluptatem impedit nostrum dolorum ab odio veniam voluptatibus necessitatibus accusantium, repellendus facere quae ad similique? Porro molestiae incidunt tenetur soluta quod molestias possimus?"
        />
        <AdminThumbnail
          bookID={14958325}
          imgUrl={bookCoverExample}
          title="Harry Potter"
          price="10000"
          dateAdded={'10-04-2002'}
          available="7"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam modi officia repudiandae adipisci voluptate deleniti quis tenetur eligendi vitae velit veniam nobis ea temporibus, vero fugiat voluptatem nisi magnam, dolor molestiae, cupiditate saepe fugit totam autem. Voluptatem impedit nostrum dolorum ab odio veniam voluptatibus necessitatibus accusantium, repellendus facere quae ad similique? Porro molestiae incidunt tenetur soluta quod molestias possimus?"
        />
      </Container>
      {showModal && (
        <button
          className="fixed bg-gray-900 text-gray-300 flex items-center justify-center p-2 bg-opacity-50 left-8 z-30 top-8 rounded-md group border-2 border-gray-400 hover:border-white hover:text-indigo-300"
          onClick={() => setShowModal(false)}
        >
          <ArrowLeftIcon className="h-8 w-8 " /> Back
        </button>
      )}
      <AddModals isShown={showModal} />
    </LayoutNav>
  );
};

export default myproducts;
