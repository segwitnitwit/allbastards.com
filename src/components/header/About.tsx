import { useState } from 'react';
import { FiHelpCircle } from 'react-icons/fi';
import Modal from '../common/Modal';
import Link from '../common/Link';

function About() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-center align-middle items-center">
      <button
        type="button"
        className="inline-flex justify-center text-xl sm:text-4xl font-medium"
        onClick={() => setIsOpen(true)}
      >
        <FiHelpCircle />
      </button>

      <Modal title="ABOUT" isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="text-lg">
          BASTARD GAN PUNKS are a collection of NFTs created by <Link to="http://berkozdemir.com/" text="BERK ÖZDEMIR" />.
          The artwork for BASTARD GAN PUNKS was created by applying a GAN on <Link to="https://larvalabs.com/cryptopunks" text="CRYPTOPUNKS" inverted />.
          ALLBASTARDS.COM displays the entire bastard collection.
          Learn more about BASTARD GAN PUNKS at <Link to="https://bastardganpunks.club/" text="BASTARDGANPUNKS.CLUB" />.
        </div>
      </Modal>
    </div>
  );
}

export default About;
