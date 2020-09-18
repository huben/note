
事务具有4个特性，原子性、一致性、隔离性、持久性

### atomicity
一个事务要么全部提交成功、要么全部失败回滚，不能只执行其中的一部分操作

### consistency
事务的执行不能破坏数据库数据的完整性和一致性，一个事务在执行之前和执行之后，数据库都必须处于一致性状态

### isolation
事务在并发环境中，并发的事务时相互隔离，不能相互干扰。隔离级别：
* Read Uncommited
* Read Commited
* Repeatable Read
* Serializable

### durability
事务提价，它对数据库中的对应数据状态的变更就会永久保存到数据库中