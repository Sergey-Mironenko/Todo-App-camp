import * as React from 'react';
import classNames from 'classnames';
import { debounce } from 'lodash';

import { useLocation, useSearchParams } from 'react-router-dom';
import { filterStyles, phoneFilterStyles, tabletFilterStyles,
  buttonStyles, phoneButtonStyles,
  dropdownStyles, activeDropdownStyles } from './filter.styles';
import { useUpdateSearch } from '../../hooks/useUpdateSearch';
import { validatePrivacy, validateStatus } from '~shared/services/searchParams.service';
import { Privacy, Status } from '~shared/services/types';

type Props = {
  onPhone: boolean,
  onTablet: boolean,
};

const Filter: React.FunctionComponent<Props> = ({ onPhone, onTablet }) => {
  const { updateSearch } = useUpdateSearch();
  const [searchParams] = useSearchParams();
  const [isStatusActive, setIsStatusActive] = React.useState(false);
  const [isPrivacyActive, setIsPrivacyActive] = React.useState(false);
  const { pathname } = useLocation();
  const filterQuery = searchParams.get('query') || '';
  const filterStatus = searchParams.get('status') || '';
  const filterPrivacy = searchParams.get('privacy') || '';
  const handleInputChange = React.useCallback(debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value) {
        updateSearch({ query: event.target.value });
      } else {
        updateSearch({ query: null });
      }
    }, 1000,
  ), [pathname]);

  const toggleStatusDropdown = () => setIsStatusActive((prevStatus) => !prevStatus);

  const togglePrivacyDropdown = () => setIsPrivacyActive((prevStatus) => !prevStatus);

  const onStatusBlur = () => setIsStatusActive(false);

  const onPrivacyBlur = () => setIsPrivacyActive(false);

  const setAnyStatus = () => updateSearch({ status: null });

  const setCompletedStatus = () => updateSearch({ status: Status.completed });

  const setActiveStatus = () => updateSearch({ status: Status.active });

  const setAnyPrivacy = () => updateSearch({ privacy: null });

  const setPrivatePrivacy = () => updateSearch({ privacy: Privacy.private });

  const setPublicPrivacy = () => updateSearch({ privacy: Privacy.public });

  return (
    <div className={classNames(
      filterStyles,
      { [phoneFilterStyles]: onPhone},
      { [tabletFilterStyles]: onTablet && !onPhone},
    )}>
      <input
        onChange={handleInputChange}
        defaultValue={filterQuery}
        type="text"
        placeholder="Enter some title..."
      />
      <div>
        <button
          className={classNames(
            buttonStyles,
            { [phoneButtonStyles]: onPhone},
          )}
          onBlur={onStatusBlur}
          onClick={toggleStatusDropdown}
        >
          {validateStatus(filterStatus) || 'Any status'}
          <div className={classNames(
            dropdownStyles,
            { [activeDropdownStyles]: isStatusActive },
          )}>
            <button
              onClick={setAnyStatus}
            >
              Any status
            </button>
            <button
              onClick={setActiveStatus}
            >
              Active
            </button>
            <button
              onClick={setCompletedStatus}
            >
              Completed
            </button>
          </div>
        </button>
        <button
          className={classNames(
            buttonStyles,
            { [phoneButtonStyles]: onPhone},
          )}
          onBlur={onPrivacyBlur}
          onClick={togglePrivacyDropdown}
        >
          {validatePrivacy(filterPrivacy) || 'Any privacy'}
          <div className={classNames(
            dropdownStyles,
            { [activeDropdownStyles]: isPrivacyActive },
          )}>
            <button
              onClick={setAnyPrivacy}
            >
              Any privacy
            </button>
            <button
              onClick={setPrivatePrivacy}
            >
              Private
            </button>
            <button
              onClick={setPublicPrivacy}
            >
              Public
            </button>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Filter;
