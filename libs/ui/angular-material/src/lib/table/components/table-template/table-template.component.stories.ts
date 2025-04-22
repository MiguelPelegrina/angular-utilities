import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TableTemplateComponent } from './table-template.component';

type Story = StoryObj<TableTemplateComponent<object>>;

export const Default: Story = {
  name: 'Default',
  args: {
    isPageable: true,
    isSortable: true,
    isFilterable: true,
    hasMultipleSelection: true,
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'surname', label: 'Surname' },
      { key: 'email', label: 'Email' },
      { key: 'age', label: 'Age' },
    ],
    paginationSizes: [5, 10, 25, 50, 100],
    defaultPageSize: 10,
    rowIconsText: 'Icons',
    rowActionText: 'Actions',
    headerText: 'Table Header',
    rowActions: [
      {
        label: 'edit',
        tooltip: 'Edit',
        condition: () => true,
        onClick: (object) => console.log('Edit', object),
      },
      {
        label: 'delete',
        tooltip: 'Delete',
        condition: () => true,
        onClick: (object) => console.log('Delete', object),
      },
    ],
    rowIcons: [
      {
        label: 'thumb_up',
        tooltip: 'Over age',
        condition: (element: any) => {
          return element.age >= 18;
        },
        color() {
          return 'green';
        },
      },
      {
        label: 'thumb_down',
        tooltip: 'Under age',
        condition: (element: any) => {
          return element.age < 18;
        },
        color() {
          return 'red';
        },
      },
    ],
    data: [
      { name: 'John', surname: 'Doe', email: 'johndoe@email.com', age: 16 },
      { name: 'Jane', surname: 'Smith', email: 'janesmith@email.com', age: 19 },
      {
        name: 'Alice',
        surname: 'Johnson',
        email: 'alicejohnson@email.com',
        age: 18,
      },
      { name: 'Bob', surname: 'Brown', email: 'bobbrown@email.com', age: 17 },
      {
        name: 'Charlie',
        surname: 'Davis',
        email: 'charliedavies@email.com',
        age: 22,
      },

      {
        name: 'David',
        surname: 'Wilson',
        email: 'davidwilson@email.com',
        age: 40,
      },
      { name: 'Eva', surname: 'Garcia', email: 'evagarcia@email.com', age: 27 },
      {
        name: 'Frank',
        surname: 'Martinez',
        email: 'frankmartinez@email.com',
        age: 32,
      },
      {
        name: 'Grace',
        surname: 'Lopez',
        email: 'gracelopez@email.com',
        age: 29,
      },
      {
        name: 'Henry',
        surname: 'Gonzalez',
        email: 'henrygonzales@email.com',
        age: 31,
      },
    ],
  },
};

const meta: Meta<TableTemplateComponent<object>> = {
  title: 'Table Template',
  component: TableTemplateComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [TableTemplateComponent],
    }),
  ],
};

export default meta;
