import { AbstractEntity } from 'src/common/entities/abstract.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { TableNames } from 'src/common/enums/table-names.enum';
import { CartItemEntity } from './cart-items.entity';

@Entity(TableNames.CARTS)
export class CartEntity extends AbstractEntity<CartEntity> {
  @Column({ name: 'user_id' })
  userId: number;

  @OneToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @OneToMany(() => CartItemEntity, (cartItem) => cartItem.cart)
  @JoinColumn()
  public cartItems: CartItemEntity[];
}
