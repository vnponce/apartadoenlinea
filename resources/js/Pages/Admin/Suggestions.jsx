import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Admin from '../../Shared/Admin';
import DetailsWrapper from '../../components/Admin/Suggestions/DetailsWrapper';
// import UsersInfoBoxes from "../../components/Admin/UsersInfoBoxes";
// import 'sweetalert2/src/sweetalert2.scss';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
import Table from '../../components/Table';
import Content from '../../components/Admin/Content';
import Pagination from '../../components/Pagination';
import SearchBar from '../../components/Admin/Suggestions/SearchBar';
import Accordion from "../../components/Accordion";
import {useWindowSize} from "../../hooks/useWindowSize";
import InfoBoxesDetailsWrapper from "../../components/Admin/InfoBoxes/InfoBoxesDetailsWrapper";


function Suggestions(props) {
  const { suggestions: { data: suggestions, link }, flash: { success_message }, users } = props;
  const { suggestions: suggestionsToPaginate } = props;
  const [dataSelected, setDataSelected] = useState(null);
  const [index, setIndex] = useState(null);
  const [accordionText, setAccordionText] = useState('');
  const [mobileShowInfoBoxes, setMobileShowInfoBoxes] = useState(false);
  const [isInfoBoxOpen, setIsInfoBoxOpen] = useState(false);
  const { isLessThanLG } = useWindowSize();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Nombre',
        accessor: 'name',
      },
      {
        Header: 'Sugerencia',
        accessor: 'suggestion',
        // Cell: ({ cell }) => {
        //     return cell.value === 'god' ? 'Gerencia' : cell.value;
        // }
      },
      {
        Header: 'Estatus',
        accessor: 'status',
        Cell: ({ cell: { row } }) => row.original.status_info.label,
      },
      // {
      //   Header: '-',
      //   accessor: 'solver',
      // },
      /*
            {
                Header: 'password',
                accessor: 'password',
                Cell: data => (
                    <span className="">Change Password</span>
                ),
            },
            */
    ],
    [],
  );

  const openedAndShow = (index) => {
    setIndex(index);
    const data = suggestions[index];
    setDataSelected(data);
    setIsInfoBoxOpen(true);
    if(isLessThanLG) {
      setMobileShowInfoBoxes(true);
    }
  };

  const hideDetails = () => {
    setIndex(null);
    const data = suggestions[null];
    setDataSelected(data);
  };

  useEffect(() => {
    if (dataSelected) {
      setDataSelected(suggestions[index]);
      // setDataSelected(false);
      // Swal.fire({
      //   position: 'top-end',
      //   icon: 'success',
      //   title: success_message,
      //   showConfirmButton: false,
      //   timer: 1500,
      // }).then(() => {
      //   location.reload();
      // });
    }
  }, [suggestions]);

  return (
        <Admin title="Panel">
            { ( (isLessThanLG && isInfoBoxOpen) || !isLessThanLG ) && (
                <InfoBoxesDetailsWrapper>
                    <DetailsWrapper data={dataSelected} hideDetails={hideDetails}/>
                </InfoBoxesDetailsWrapper>
            )}
            {!mobileShowInfoBoxes && (
                <Content>
                <Accordion text={accordionText}>
                    <SearchBar solvers={users} setAccordionText={setAccordionText}/>
                </Accordion>
                <h5 className="font-bold text-black inline-block">Sugerencias</h5>
                <div className="w-full overflow-y-hidden">
                    <Table
                        columns={columns}
                        data={suggestions}
                        onClick={(row) => openedAndShow(row.index)}
                        selected={dataSelected}
                    />
                </div>
                <Pagination items={suggestionsToPaginate} />
            </Content>
            )}
        </Admin>
  );
}

export default Suggestions;
