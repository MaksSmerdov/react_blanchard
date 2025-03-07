import { useEffect, useRef } from 'react';
import styles from './DropDown.module.scss';

type DropdownProps = {
  id: string;
  title: string;
  items: string[];
  activeDropdown: string | null;
  setActiveDropdown: (id: string | null) => void;
};

export default function Dropdown({ id, title, items, activeDropdown, setActiveDropdown }: DropdownProps) {
  const isOpen = activeDropdown === id;
  const toggleDropdown = () => {
    setActiveDropdown(isOpen ? null : id);
  };

  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setActiveDropdown]);

  const getBackgroundImageUrl = (index: number) => {
    if (id === 'realism') {
      return `/assets/img/dropdown/realizm-${index + 1}.png`;
    } else if (id === 'impressionism') {
      return `/assets/img/dropdown/impres-${index + 1}.png`;
    } else if (id === 'postimpressionism') {
      return `/assets/img/dropdown/postimpres-${index + 1}.png`;
    }
    return '';
  };

  return (
    <li ref={dropdownRef} className={styles['header__additional-item']}>
      <button
        className={`${styles['header__additional-btn']} ${isOpen ? styles['active'] : ''}`}
        onClick={toggleDropdown}
      >
        {title}
      </button>
      <ul className={`${styles['dropdown-list']} ${isOpen ? styles['dropdown-list--open'] : ''}`}>
        {items.map((item, index) => (
          <li key={item} className={styles['dropdown-item']}>
            <a
              className={styles['dropdown-link']}
              href="#"
              style={{ backgroundImage: `url(${getBackgroundImageUrl(index)})` }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
