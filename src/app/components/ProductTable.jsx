import {Table} from "@heroui/react";
import { getAllProducts } from "@/lib/data";
import { Button } from "@heroui/react";

export async function  ProductTable() {
    const productData = await getAllProducts()
  return (
    <div className="max-w-9xl mx-auto">
        <Table >
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Product Name</Table.Column>
            <Table.Column>Price ($)</Table.Column>
            <Table.Column>Stock</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>
          <Table.Body>
            
            {
                productData.map(product=>
                    <Table.Row key={product._id}>
              <Table.Cell>{product.title}</Table.Cell>
              <Table.Cell>{product.price}</Table.Cell>
              <Table.Cell>{product.stock}</Table.Cell>
              <Table.Cell className={'flex gap-3'}>
                <Button>Edit</Button>
                <Button variant="danger">Delete</Button>
              </Table.Cell>
            </Table.Row>
                )
            }
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>

    </div>
    
  );
}